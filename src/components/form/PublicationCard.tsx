import placeholder from "@/resources/resumePlaceholder";
const { publications } = placeholder;

export default function PublicationCard() {
	return (
		<div class="flex flex-col gap-3 border-black border p-3 rounded-md">
			<label for="name">
				Name
				<input
					placeholder={publications[0].name}
					id="name"
					name="name"
					type="text"
				/>
			</label>
			<label for="publisher">
				Publisher
				<input
					placeholder={publications[0].publisher}
					id="publisher"
					name="publisher"
					type="text"
				/>
			</label>
			<label for="releaseDate">
				Release Date
				<input id="releaseDate" name="releaseDate" type="date" />
			</label>
			<label for="url">
				Url
				<input
					id="url"
					name="url"
					type="url"
					placeholder={publications[0].url}
				/>
			</label>
			<label for="summary">
				Summary
				<textarea
					id="summary"
					name="summary"
					placeholder={publications[0].summary}
				/>
			</label>
		</div>
	);
}
