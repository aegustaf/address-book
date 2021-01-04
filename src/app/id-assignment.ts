export class IdAssignment {

    private static id = 2;

    static assignNewId(): number {
        this.id++;
        return this.id;
    }
}
