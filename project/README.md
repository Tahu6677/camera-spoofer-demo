# Camera Spoofer Demo - NativeScript App

🎓 **Academic Research Project** - Camera Virtualization & Media Manipulation Study

## 📱 About

This proof-of-concept demonstrates advanced Android system manipulation techniques for educational purposes, including:

- Camera2 API interception and redirection
- Media stream injection via LSPosed modules  
- Real-time OBS integration for live streaming
- System-level permission management

## 🚀 Automated APK Builds

This project uses GitHub Actions to automatically build APK files with zero local setup required.

### 📥 Download APK

1. **From GitHub Actions:**
   - Go to the [Actions tab](../../actions)
   - Click on the latest successful build
   - Download the APK from "Artifacts" section

2. **From Releases:**
   - Check the [Releases page](../../releases) for stable builds
   - Download the latest APK file

### 📋 Installation Requirements

- **Rooted Android Device** (Android 7.0+)
- **Magisk** installed and working
- **LSPosed Framework** active
- **Unknown Sources** enabled in settings

### 🔧 Installation Steps

1. Download the APK from GitHub Actions or Releases
2. Transfer to your rooted device
3. Install using package manager or file explorer
4. Grant necessary permissions when prompted
5. Configure LSPosed modules as needed

## 🏗️ Development

### Build Status
![Build Status](../../actions/workflows/build-android.yml/badge.svg)

### Tech Stack
- **Frontend:** NativeScript + TypeScript
- **Styling:** Tailwind CSS
- **Build:** GitHub Actions CI/CD
- **Target:** Android 7.0+ (API 24+)

### Project Structure
```
app/
├── models/           # Data models and state management
├── main-page.xml     # UI layout
├── main-page.ts      # Page logic
├── main-view-model.ts # Business logic
└── app.css          # Styling

.github/workflows/    # CI/CD pipeline
```

## ⚖️ Legal & Ethics

**⚠️ ACADEMIC USE ONLY**

This project is developed strictly for educational and research purposes as part of a computer science capstone program.

### ✅ Ethical Guidelines
- Sandboxed testing environment only
- No malicious intent or exploitation
- Academic supervision and oversight
- No public distribution of exploits

### 🛡️ Security Research
This research highlights important security considerations:
- Camera access controls in modern Android
- Hardware-backed security features
- Root detection mechanisms
- Media integrity verification

## 📊 Features

### Control Panel
- **System Status Dashboard** - Real-time monitoring
- **Mode Selection** - Gallery Photo/Video, OBS Stream
- **Media Management** - File selection and preview
- **OBS Integration** - Stream key configuration

### Technical Implementation
- **LSPosed Module Development** - Custom Camera2 API hooks
- **Smali Patching** - Bytecode modification techniques
- **Media Stream Redirection** - Virtual camera devices
- **Root Detection Bypass** - Multi-layered approach

## 🔄 CI/CD Pipeline

The GitHub Actions workflow automatically:
1. Sets up Android SDK and build tools
2. Installs NativeScript CLI
3. Builds both debug and release APKs
4. Uploads artifacts for download
5. Creates releases for stable builds

### Manual Build Trigger
You can manually trigger a build by:
1. Going to Actions tab
2. Selecting "Build Android APK" workflow  
3. Clicking "Run workflow"

## 📞 Support

For academic inquiries or technical questions about this research project, please open an issue in this repository.

---

**Disclaimer:** This software is for educational purposes only. Users are responsible for compliance with applicable laws and regulations.