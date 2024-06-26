import ph from "@/resources/resumePlaceholder";
import { resume, setResume } from "@/store/resumeStore";
import type { FormProps, Work } from "@/types";
import { createSignal } from "solid-js";

export default function WorkForm(props: FormProps) {
  const [data, setData] = createSignal<Work>();

  function handleInput(e: Event) {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setData({ ...data(), [name]: value });
    setResume("work", props.key, data());
  }

  return (
    <fieldset onInput={handleInput}>
      <label for={`position${props.key}`}>
        Position
        <input
          id={`position${props.key}`}
          name="position"
          type="text"
          placeholder={ph.work[0].position}
          value={
            resume?.work[props.key]?.position
              ? resume.work[props.key].position
              : null
          }
        />
      </label>
      <label for={`name${props.key}`}>
        Company
        <input
          autocomplete="name"
          id={`name${props.key}`}
          name="name"
          type="text"
          placeholder={ph.work[0].name}
          value={
            resume?.work[props.key]?.name ? resume.work[props.key].name : null
          }
        />
      </label>
      <label for={`url${props.key}`}>
        Url
        <input
          id={`url${props.key}`}
          name="url"
          type="url"
          placeholder={ph.work[0].url}
          value={
            resume?.work[props.key]?.url ? resume.work[props.key].url : null
          }
        />
      </label>
      <label for={`startDate${props.key}`}>
        Starting date
        <input
          id={`startDate${props.key}`}
          name="startDate"
          type="date"
          value={
            resume?.work[props.key]?.startDate
              ? resume.work[props.key].startDate
              : null
          }
        />
      </label>
      <label for={`endDate${props.key}`}>
        Ending date
        <input
          id={`endDate${props.key}`}
          name="endDate"
          type="date"
          value={
            resume?.work[props.key]?.endDate
              ? resume.work[props.key].endDate
              : null
          }
        />
      </label>
      <label for={`summary${props.key}`}>
        Summary
        <textarea
          id={`summary${props.key}`}
          name="summary"
          placeholder={ph.work[0].summary}
          value={
            resume?.work[props.key]?.summary
              ? resume.work[props.key].summary
              : null
          }
        />
      </label>
      {/*
			<label for="highlights">
				Highlights
				<input
					id="highlights"
					name="highlights"
					type="text"
					placeholder={work[0].highlights[0]}
				/>
			</label>
      */}
    </fieldset>
  );
}
