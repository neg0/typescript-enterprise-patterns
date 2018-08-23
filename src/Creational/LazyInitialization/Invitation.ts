export class Invitation {
  private static types = {};
  private constructor(private type: string) {}

  public static getInvitee(type: string): Invitation {
    // Lazy initialization takes place here
    if (undefined === Invitation.types[type]) {
      Invitation.types[type] = new Invitation(type);
    }

    return Invitation.types[type];
  }

  public static getAllInvitees(): object {
    return Invitation.types;
  }

  public static getCount(): number {
    return Object.getOwnPropertyNames(Invitation.types).length;
  }
}
