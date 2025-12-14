# TheBisonGroup.io - Professional Consultancy Website

A modern, responsive website for The Bison Group consultancy, showcasing expertise in operational excellence, AI integration, and business transformation.

## 🚀 Features

- **Hero Section** - Compelling introduction with core value proposition
- **Services Showcase** - Complete "Strategy of ICE: Triplicity™ Solutions"
- **RESIDS Program™** - Flagship SaaS platform methodology
- **Augmented Intelligence (AI+)** - Human-AI synergy framework
- **Axeus Platform™** - Productivity platform with 5-Ringz™ Strategy
- **Publications** - Thought leadership and upcoming books
- **About Us** - Company background and contact information
- **Responsive Design** - Mobile-first, professional styling

## 🛠 Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Lucide React** for icons
- **React Router** for navigation

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/thebisongroup-website.git
cd thebisongroup-website

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically with each push

### Netlify
1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `pnpm run build`
4. Set publish directory: `dist`

### Manual Deployment
```bash
# Build the project
pnpm run build

# The built files will be in the 'dist' directory
# Upload the contents to your web server
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Navigation.tsx      # Site navigation
│   ├── HeroSection.tsx     # Hero section
│   ├── ServicesSection.tsx # Services showcase
│   ├── ResidsSection.tsx   # RESIDS Program
│   ├── AISection.tsx       # AI+ framework
│   ├── AxeusSection.tsx    # Axeus Platform
│   ├── PublicationsSection.tsx # Publications
│   ├── AboutSection.tsx    # About us
│   └── Footer.tsx          # Site footer
├── pages/
│   ├── Index.tsx           # Main homepage
│   └── NotFound.tsx        # 404 page
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
└── App.tsx                 # Main app component
```

## 🎨 Customization

### Colors
The website uses a professional color scheme defined in Tailwind CSS:
- Primary: Blue (blue-600)
- Secondary: Gray tones
- Accent colors for different sections

### Content
All content can be modified in the respective component files:
- Company information in `HeroSection.tsx`
- Services in `ServicesSection.tsx`
- Contact details in `AboutSection.tsx` and `Footer.tsx`

## 📧 Contact

- **Email**: support@thebisongroup.io
- **LinkedIn**: [LinkedIn.com/in/skipper](https://linkedin.com/in/skipper)

## 📄 License

© 2023 DamianPitts, LLC | TheBisonGroup.io. All rights reserved.

---

**Performance-driven Execution™ (PdE) | RESIDS™ Program | Axeus™ Platform**