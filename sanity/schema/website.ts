
export const website = {
	name: 'website',
	type: 'document',
	title: 'Website',
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Your Name'
		},
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'description',
			type: 'array',
			of: [{type: 'block'}],
			title: 'Description'
		}
	]
}
