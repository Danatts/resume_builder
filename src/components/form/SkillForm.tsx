import ph from "@/resources/resumePlaceholder";
import { resume, setResume } from "@/store/resumeStore";
import type { FormProps, Skill } from "@/types";
import { createSignal } from "solid-js";

export default function SkillForm(props: FormProps) {
  const [data, setData] = createSignal<Skill>();

  function handleInput(e: Event) {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setData({ ...data(), [name]: value });
    setResume("skills", props.key, data());
  }

  return (
    <fieldset onInput={handleInput}>
      <label for={`name${props.key}`}>
        Name
        <input
          autocomplete="name"
          placeholder={ph.skills[0].name}
          id={`name${props.key}`}
          name="name"
          type="text"
          value={
            resume?.skills[props.key]?.name
              ? resume.skills[props.key].name
              : null
          }
        />
      </label>
      <label for={`level${props.key}`}>
        Level
        <input
          placeholder={ph.skills[0].level}
          id={`level${props.key}`}
          name="level"
          type="text"
          value={
            resume?.skills[props.key]?.level
              ? resume.skills[props.key].level
              : null
          }
        />
      </label>
      {/*
			<label for="keywords">
				Keywords
				<input
					placeholder={skills[0].keywords[0]}
					id="keywords"
					name="keywords"
					type="text"
				/>
			</label>
      */}
    </fieldset>
  );
}
