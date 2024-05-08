import Basics from "@/components/form/BasicsForm";
import ListCards from "@/components/form/ListCards";
import Location from "@/components/form/LocationForm";
import { ResumeProvider } from "@/contexts/ResumeContext";
import "@/styles/main.css";

export default function FormPanel() {
	return (
		<div>
			<ResumeProvider>
				<Basics />
				<Location />
				<ListCards
					componentName={"WorkForm"}
					legend={"Work Experience"}
					formID={"work"}
				/>
				<ListCards
					componentName={"EducationForm"}
					legend={"Education"}
					formID={"education"}
				/>
				<ListCards
					componentName={"SkillForm"}
					legend={"Skills"}
					formID={"skills"}
				/>
				<ListCards
					componentName={"LanguageForm"}
					legend={"Languages"}
					formID={"languages"}
				/>
			</ResumeProvider>
		</div>
	);
}
