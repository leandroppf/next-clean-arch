type UserProps = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  date: string;
  role: string;
};

export class User {
  constructor(public props: UserProps) {
    this.props = props;
  }

  get id(): string {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get avatar(): string {
    return this.props.avatar;
  }

  get date(): string {
    return this.props.date;
  }

  get role(): string {
    return this.props.role;
  }
}
