

class ActivityModel {

	public name: string;
	public complete: boolean;

	constructor(name: string) {
		this.name = name;
		this.complete = false;
	}

	public setComplete() {
		this.complete = !this.complete;
	}

}

export default ActivityModel;