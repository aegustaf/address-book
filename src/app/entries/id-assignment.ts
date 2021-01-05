export class IdAssignment {

    private static id = 0;

    static assignNewId(): number {
        this.id++;
        return this.id;
    }
}
