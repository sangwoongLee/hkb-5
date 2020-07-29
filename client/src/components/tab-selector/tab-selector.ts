import Component from '../component';

export default class TabSelector extends Component {
	// Remove hardcoded tab data
	private tabs: string[] = ['내역', '달력', '통계'];
	private onMoveTab: (tab: string) => void;
	constructor(onMoveTab: (tab: string) => void) {
		super();
		this.dom = document.createElement('div');
		this.dom.classList.add('tab-selector');
		this.onMoveTab = onMoveTab;
		this.init();
	}

	init(): void {
		this.render();
		this.dom?.addEventListener('click', (evt: any) => {
			const tabName = evt.target.dataset.name;
			if (!tabName) return;
			this.dom?.querySelector('.tab-highlight');
			this.onMoveTab(tabName);
			const highlight: any = this.dom?.querySelector('.tab-highlight') as any;
			const index = this.tabs.indexOf(tabName);
			//TODO 위치 조절 필요
			highlight.style.transform = `translateX(${index * 5}rem)`;
		});
	}

	render(): void {
		this.dom!.innerHTML = `
		<div class="tab-highlight"></div>
		<ul>
			${this.tabs
				.map(
					(tab) => `
					<li data-name="${tab}">${tab}</li>
				`
				)
				.join('')}
		</ul>
		`;
	}
}