import AwardForm from "@/components/form/AwardForm";
import CertificateForm from "@/components/form/CertificateForm";
import EducationForm from "@/components/form/EducationForm";
import InterestForm from "@/components/form/InterestForm";
import LanguageForm from "@/components/form/LanguageForm";
import ProfileForm from "@/components/form/ProfileForm";
import ProjectForm from "@/components/form/ProjectForm";
import PublicationForm from "@/components/form/PublicationForm";
import ReferenceForm from "@/components/form/ReferenceForm";
import SkillForm from "@/components/form/SkillForm";
import VolunteerForm from "@/components/form/VolunteerForm";
import WorkForm from "@/components/form/WorkForm";
import Card from "@/components/form/common/Card";
import useResumeContext from "@/hooks/useResumeContext";
import type { Resume } from "@/types";
import type { JSXElement } from "solid-js";
import { For, Show, createSignal } from "solid-js";
import type { Part } from "solid-js/store";

interface Props {
	componentName: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	formID: string | Part<Resume, any>;
	legend: string;
}

const FORM = {
	AwardForm,
	CertificateForm,
	EducationForm,
	InterestForm,
	LanguageForm,
	ProfileForm,
	ProjectForm,
	PublicationForm,
	ReferenceForm,
	SkillForm,
	WorkForm,
	VolunteerForm,
};

export default function ListCards(props: Props) {
	const Form: (props: { key: number }) => JSXElement | null =
		FORM[props.componentName];

	const [list, setList] = createSignal([]);

	const { store, setStore } = useResumeContext();

	function addCard() {
		setList([...list(), {}]);
	}

	function removeCard(id: number) {
		setList(list().filter((_, i) => i !== id));
		if (props.formID === "profiles") {
			setStore(
				"basics",
				"profiles",
				[...store.basics.profiles].toSpliced(id, 1),
			);
		} else {
			setStore(props.formID, [...store[props.formID]].toSpliced(id, 1));
		}
	}

	return (
		<Show when={Form}>
			<form id={props.formID} name={props.formID}>
				<legend>{props.legend}</legend>
				<For each={list()}>
					{(_, index) => (
						<Card key={index()} delete={removeCard}>
							<Form key={index()} />
						</Card>
					)}
				</For>
				<button class="border p-1 rounded-md" type="button" onClick={addCard}>
					Add
				</button>
			</form>
		</Show>
	);
}
