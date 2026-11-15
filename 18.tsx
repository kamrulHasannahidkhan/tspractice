type Action = "start" | "stop";
type EventName<T extends string> = `on${Capitalize<T>}`;

type AppEvents = EventName<Action>; // "onStart" | "onStop"