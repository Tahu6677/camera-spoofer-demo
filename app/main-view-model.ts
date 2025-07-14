import { Observable } from '@nativescript/core';
import { AppState, SpoofingMode, MediaSource } from './models/app-state';

export class MainViewModel extends Observable {
  private appState: AppState;
  private _selectedTabIndex: number = 0;

  constructor() {
    super();
    this.appState = new AppState();
  }

  get selectedTabIndex(): number {
    return this._selectedTabIndex;
  }

  set selectedTabIndex(value: number) {
    if (this._selectedTabIndex !== value) {
      this._selectedTabIndex = value;
      this.notifyPropertyChange('selectedTabIndex', value);
    }
  }

  get spoofingEnabled(): boolean {
    return this.appState.spoofingEnabled;
  }

  get currentMode(): string {
    return this.appState.currentMode;
  }

  get connectionStatus(): string {
    return this.appState.connectionStatus;
  }

  get selectedMedia(): MediaSource | null {
    return this.appState.selectedMedia;
  }

  get obsStreamKey(): string {
    return this.appState.obsStreamKey;
  }

  get obsStreamUrl(): string {
    return this.appState.obsStreamUrl;
  }

  onToggleSpoofer() {
    this.appState.spoofingEnabled = !this.appState.spoofingEnabled;
    this.notifyPropertyChange('spoofingEnabled', this.appState.spoofingEnabled);
    this.notifyPropertyChange('connectionStatus', this.appState.connectionStatus);
  }

  onModeSelected(args: any) {
    const mode = args.object.tag as SpoofingMode;
    this.appState.currentMode = mode;
    this.notifyPropertyChange('currentMode', this.appState.currentMode);
    this.notifyPropertyChange('connectionStatus', this.appState.connectionStatus);
  }

  onSelectMedia() {
    // Simulate media selection
    const mockSources = this.appState.getMockMediaSources();
    const randomSource = mockSources[Math.floor(Math.random() * mockSources.length)];
    
    // Filter by current mode
    const isPhoto = this.appState.currentMode === SpoofingMode.GALLERY_PHOTO;
    const filteredSources = mockSources.filter(s => 
      isPhoto ? s.type === 'photo' : s.type === 'video'
    );
    
    if (filteredSources.length > 0) {
      this.appState.selectedMedia = filteredSources[0];
      this.notifyPropertyChange('selectedMedia', this.appState.selectedMedia);
      this.notifyPropertyChange('connectionStatus', this.appState.connectionStatus);
    }
  }

  onStreamKeyChanged(args: any) {
    this.appState.obsStreamKey = args.object.text;
    this.notifyPropertyChange('connectionStatus', this.appState.connectionStatus);
  }

  onConnectOBS() {
    if (this.appState.obsStreamKey.trim()) {
      // Simulate OBS connection
      this.appState.connectionStatus = 'Connecting to OBS...';
      this.notifyPropertyChange('connectionStatus', this.appState.connectionStatus);
      
      setTimeout(() => {
        this.appState.connectionStatus = 'Stream Connected';
        this.notifyPropertyChange('connectionStatus', this.appState.connectionStatus);
      }, 2000);
    }
  }

  getModeDisplayName(mode: string): string {
    switch (mode) {
      case SpoofingMode.GALLERY_PHOTO:
        return 'Gallery Photo';
      case SpoofingMode.GALLERY_VIDEO:
        return 'Gallery Video';
      case SpoofingMode.OBS_STREAM:
        return 'OBS Stream';
      default:
        return 'Disabled';
    }
  }

  getStatusColor(): string {
    if (!this.appState.spoofingEnabled) return '#6B7280';
    
    switch (this.appState.connectionStatus) {
      case 'Photo Active':
      case 'Video Active':
      case 'Stream Connected':
        return '#10B981';
      case 'Connecting to OBS...':
        return '#F59E0B';
      default:
        return '#EF4444';
    }
  }
}