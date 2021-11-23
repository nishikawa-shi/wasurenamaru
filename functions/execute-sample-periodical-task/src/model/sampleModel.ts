export class SampleModel {
    private x: number
    private y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    totalPropertyNumbers(): number {
        return this.x + this.y
    }
}
