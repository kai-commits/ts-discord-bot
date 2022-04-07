export interface IBot {
  sendMessage(message: string): Promise<void>, 
  start(): Promise<void>,
}
