import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<Toast[]>([]);
  private _next = 0;

  success(message: string, duration = 4000): void { this._add(message, 'success', duration); }
  error(message: string, duration = 5000): void { this._add(message, 'error', duration); }
  info(message: string, duration = 4000): void { this._add(message, 'info', duration); }

  remove(id: number): void {
    this.toasts.update(t => t.filter(x => x.id !== id));
  }

  private _add(message: string, type: Toast['type'], duration: number): void {
    const id = ++this._next;
    this.toasts.update(t => [...t, { id, message, type }]);
    setTimeout(() => this.remove(id), duration);
  }
}
