


export const three_cols = {
	name: 'three_cols',
	type: 'document',
	title: 'Three Columns',
	fields: [
		{
			name: 'are_there_icons',
			type: 'boolean',
			title: 'Icons (= not numbers)?'
		},
		{
			name: 'icons',
			type: 'array',
			of: [{type: 'picture'}], 
			title: 'Icons'
		},
		{
			name: 'figures',
			type: 'array',
			of: [{type: 'string'}],
			title: 'Figures'
		},
		{
			name: 'columns_titles',
			type: 'array',
			of: [{type: 'string'}],
			title: 'Column Titles'
		},
		{
			name: 'columns_text_1',
			type: 'array',
			of: [
				{
					type: 'block',
					marks: {
						decorators: [
							{title: 'Strong', value: 'strong'},
							{title: 'Emphasis', value: 'em'},
							{title: 'Code', value: 'code'}
						]
					}
				}
			],
			title: 'Column 1 Text'
		},
		{
			name: 'columns_text_2',
			type: 'array',
			of: [
				{
					type: 'block',
					marks: {
						decorators: [
							{title: 'Strong', value: 'strong'},
							{title: 'Emphasis', value: 'em'},
							{title: 'Code', value: 'code'}
						]
					}
				}
			],
			title: 'Column 2 Text'
		},
		{
			name: 'columns_text_3',
			type: 'array',
			of: [
				{
					type: 'block',
					marks: {
						decorators: [
							{title: 'Strong', value: 'strong'},
							{title: 'Emphasis', value: 'em'},
							{title: 'Code', value: 'code'}
						]
					}
				}
			],
			title: 'Column 3 Text'
		}
	]
}
		
