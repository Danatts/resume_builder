import VolunteerCard from "@/components/form/VolunteerCard";
import useRenderCards from "@/hooks/useRenderCards";

export default function Work() {
	const { createCard, deleteCard, renderCards } = useRenderCards();

	return (
		<form id="volunteer" name="volunteer">
			<legend>Volunteer</legend>
			{renderCards(VolunteerCard)}
			<button type="button" onClick={createCard}>
				Add
			</button>
			<button type="button" onClick={deleteCard}>
				Remove
			</button>
		</form>
	);
}
