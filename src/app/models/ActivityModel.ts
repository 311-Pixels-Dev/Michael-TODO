

class ActivityModel {

	public name: string;
	public complete: boolean;
	public category: string;

	constructor(name: string, cat: string) {
		this.name = name;
		this.complete = false;
		this.category = cat;
	}

	public setComplete() {
		this.complete = !this.complete;
	}

}

export default ActivityModel;