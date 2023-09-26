import "client-only";

export function getLocalStorage<Type>(key: string, defaultValue:Type){
    const stickyValue = localStorage.getItem(key);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return (stickyValue !== null && stickyValue !== 'undefined')
        ? JSON.parse(stickyValue)
        : defaultValue;
}

export function setLocalStorage<Type>(key: string, value:Type){
    localStorage.setItem(key, JSON.stringify(value));
}