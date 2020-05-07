export class Eventing {
  events: { [key: string]: Function[] } = {};

  on = (eventName: string, callback: Function): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (handlers) {
      handlers.forEach((callback) => callback());
    }
  };
}
