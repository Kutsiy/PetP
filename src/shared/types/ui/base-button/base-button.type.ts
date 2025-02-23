export type ButtonType = 'success' | 'warning';

export abstract class AbstractBaseButton {
  abstract buttonType: ButtonType;
  abstract onClick: (event: MouseEvent) => void;
  constructor() {}
}
