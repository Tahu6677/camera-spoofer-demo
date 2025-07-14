import { Observable } from '@nativescript/core';

export enum SpoofingMode {
  DISABLED = 'disabled',
  GALLERY_PHOTO = 'gallery_photo',
  GALLERY_VIDEO = 'gallery_video',
  OBS_STREAM = 'obs_stream'
}

export interface MediaSource {
  id: string;
  name: string;
  type: 'photo' | 'video';
  thumbnail: string;
  path: string;
}

export class AppState extends Observable {
  private _spoofingEnabled: boolean = false;
  private _currentMode: SpoofingMode = SpoofingMode.DISABLED;
  private _selectedMedia: MediaSource | null = null;
  private _obsStreamKey: string = '';
  private _obsStreamUrl: string = 'rtmp://localhost:1935/live';
  private _connectionStatus: string = 'Disconnected';

  constructor() {
    super();
  }

  get spoofingEnabled(): boolean {
    return this._spoofingEnabled;
  }

  set spoofingEnabled(value: boolean) {
    if (this._spoofingEnabled !== value) {
      this._spoofingEnabled = value;
      this.notifyPropertyChange('spoofingEnabled', value);
      this.updateConnectionStatus();
    }
  }

  get currentMode(): SpoofingMode {
    return this._currentMode;
  }

  set currentMode(value: SpoofingMode) {
    if (this._currentMode !== value) {
      this._currentMode = value;
      this.notifyPropertyChange('currentMode', value);
      this.updateConnectionStatus();
    }
  }

  get selectedMedia(): MediaSource | null {
    return this._selectedMedia;
  }

  set selectedMedia(value: MediaSource | null) {
    if (this._selectedMedia !== value) {
      this._selectedMedia = value;
      this.notifyPropertyChange('selectedMedia', value);
    }
  }

  get obsStreamKey(): string {
    return this._obsStreamKey;
  }

  set obsStreamKey(value: string) {
    if (this._obsStreamKey !== value) {
      this._obsStreamKey = value;
      this.notifyPropertyChange('obsStreamKey', value);
    }
  }

  get obsStreamUrl(): string {
    return this._obsStreamUrl;
  }

  set obsStreamUrl(value: string) {
    if (this._obsStreamUrl !== value) {
      this._obsStreamUrl = value;
      this.notifyPropertyChange('obsStreamUrl', value);
    }
  }

  get connectionStatus(): string {
    return this._connectionStatus;
  }

  set connectionStatus(value: string) {
    if (this._connectionStatus !== value) {
      this._connectionStatus = value;
      this.notifyPropertyChange('connectionStatus', value);
    }
  }

  private updateConnectionStatus() {
    if (!this._spoofingEnabled) {
      this.connectionStatus = 'Disconnected';
    } else {
      switch (this._currentMode) {
        case SpoofingMode.GALLERY_PHOTO:
          this.connectionStatus = this._selectedMedia ? 'Photo Active' : 'No Photo Selected';
          break;
        case SpoofingMode.GALLERY_VIDEO:
          this.connectionStatus = this._selectedMedia ? 'Video Active' : 'No Video Selected';
          break;
        case SpoofingMode.OBS_STREAM:
          this.connectionStatus = this._obsStreamKey ? 'Stream Connected' : 'Stream Key Required';
          break;
        default:
          this.connectionStatus = 'Ready';
      }
    }
  }

  getMockMediaSources(): MediaSource[] {
    return [
      {
        id: '1',
        name: 'Sample Photo 1.jpg',
        type: 'photo',
        thumbnail: '📷',
        path: '/storage/emulated/0/DCIM/sample1.jpg'
      },
      {
        id: '2',
        name: 'Test Video.mp4',
        type: 'video',
        thumbnail: '🎥',
        path: '/storage/emulated/0/Movies/test_video.mp4'
      },
      {
        id: '3',
        name: 'Profile Picture.png',
        type: 'photo',
        thumbnail: '🖼️',
        path: '/storage/emulated/0/Pictures/profile.png'
      },
      {
        id: '4',
        name: 'Demo Recording.mp4',
        type: 'video',
        thumbnail: '📹',
        path: '/storage/emulated/0/Movies/demo.mp4'
      }
    ];
  }
}