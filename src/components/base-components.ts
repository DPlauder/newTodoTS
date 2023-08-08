export abstract class Component<T extends HTMLElement, U extends HTMLElement>{
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(templateId: string, hostElement: string, element: string){
        this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
        this.hostElement = document.getElementById(hostElement)! as T;

        const importedNode = document.importNode(this.templateElement, true);

        this.element = importedNode.firstElementChild as U;
        this.attach();
    }
    private attach(){
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}