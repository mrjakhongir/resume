export interface InputFiled {
	label: string;
	name: string;
	placeholder: string;
	type: string;
}

export interface Link {
	id: number;
	link: string;
	site: string;
}
export interface UserInfo {
	fName: string;
	lName: string;
	email: string;
	phone: string;
	address: string;
	jobTitle: string;
	links: Link[];
}

export interface Education {
	id: number;
	institution: string;
	location: string;
	degreeType: string;
	field: string;
	startYear: string;
	gradYear: string;
}
