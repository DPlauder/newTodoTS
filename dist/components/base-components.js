export class Component {
    constructor(templateId, hostElement, element) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElement);
        const importedNode = document.importNode(this.templateElement, true);
        this.element = importedNode.firstElementChild;
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}
