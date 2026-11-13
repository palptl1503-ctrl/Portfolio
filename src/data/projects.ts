import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "indian-currency-classification",
    title: "Indian Currency Note Classification",
    tagline: "Deep learning model to identify and classify Indian banknotes using CNN.",
    category: "Machine Learning",
    year: "2024",
    role: "Researcher & Developer",
    featured: true,
    order: 1,
    overview:
      "Built a deep learning model using Convolutional Neural Networks (CNN) that can recognize and classify different denominations of Indian currency notes from images. This was part of my academic research and I also published a paper on it.",
    problem:
      "Manually sorting and verifying currency notes is slow and error-prone, especially for visually impaired individuals and banking operations that handle large volumes of cash daily.",
    solution:
      "Developed a CNN-based image classification system trained on a dataset of Indian banknote images. The model processes input images, extracts features through convolutional layers, and predicts the denomination with high accuracy.",
    keyFeatures: [
      "Image preprocessing and data augmentation for better model training",
      "CNN architecture with multiple convolutional and pooling layers",
      "Trained on a custom dataset of Indian currency note images",
      "Achieved high classification accuracy across different denominations",
      "Published research paper documenting the methodology and results",
    ],
    challenges: [
      {
        title: "Limited Training Data",
        description:
          "Collecting enough good quality images of different currency notes was tricky. Used data augmentation techniques like rotation, flipping, and brightness adjustments to expand the dataset.",
      },
      {
        title: "Handling Worn-Out Notes",
        description:
          "Old and damaged notes looked very different from fresh ones. Added more variety in training images and tuned the model to handle these edge cases.",
      },
    ],
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
    metrics: [
      { label: "Accuracy", value: "98%+" },
      { label: "Note Types", value: "7" },
      { label: "Training Images", value: "2,000+" },
    ],
    githubUrl: "https://github.com/palptl1503-ctrl",
    downloadUrl: "/assets/paper.pdf",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "n-mart",
    title: "N-MART Retail Management System",
    tagline: "A complete retail store management solution for inventory, billing, and sales tracking.",
    category: "Full-Stack",
    year: "2024",
    role: "Developer",
    featured: true,
    order: 2,
    overview:
      "N-MART is a retail management system designed to help small and medium shop owners manage their day-to-day operations. It handles product inventory, generates bills, tracks sales, and provides basic reporting — all from a simple, easy-to-use interface.",
    problem:
      "Many small retailers in India still use paper registers or basic spreadsheets to manage their shops, which leads to errors, lost records, and no way to track trends over time.",
    solution:
      "Created a web-based application where shop owners can add products, manage stock levels, create customer bills, and view sales summaries. The interface is kept simple so that anyone can use it without technical knowledge.",
    keyFeatures: [
      "Product catalog with add, edit, and delete functionality",
      "Inventory tracking with low-stock alerts",
      "Billing system that generates itemized receipts",
      "Daily and monthly sales summary reports",
      "Simple and clean user interface for non-technical users",
    ],
    challenges: [
      {
        title: "Keeping It Simple",
        description:
          "The biggest challenge was not overcomplicating the UI. Small shop owners don't want dozens of menus and options — they want to add a product and make a bill quickly.",
      },
      {
        title: "Handling Concurrent Stock Updates",
        description:
          "When multiple bills are created at the same time, the stock count needs to stay accurate. Handled this with proper database transactions.",
      },
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    metrics: [
      { label: "Products Managed", value: "500+" },
      { label: "Load Time", value: "< 2s" },
      { label: "Pages", value: "8" },
    ],
    githubUrl: "https://github.com/palptl1503-ctrl",
    downloadUrl: "/assets/nmart.pptx",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "research-paper-publication",
    title: "Published Research Paper",
    tagline: "Research paper on Indian Currency Note Classification Using Deep Learning.",
    category: "Publication",
    year: "2024",
    role: "Author",
    featured: true,
    order: 3,
    overview:
      "Published a research paper titled 'Indian Currency Note Classification Using Deep Learning' that documents the complete methodology, dataset preparation, model architecture, training process, and results of the currency classification project.",
    techStack: ["Deep Learning", "CNN", "Python", "TensorFlow"],
    downloadUrl: "/assets/paper.pdf",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "certificate-icies-2025",
    title: "ICIES 2025 — Certificate of Participation",
    tagline: "Oral presentation on Indian Currency Note Classification Using Deep Learning at an international conference.",
    category: "Certification",
    year: "2025",
    role: "Presenter & Author",
    featured: true,
    order: 4,
    overview:
      "Received a Certificate of Participation for attending and giving an oral presentation on the paper 'Indian Currency Note Classification Using Deep Learning' at the International Conference on Innovation in Engineering and Sciences (ICIES 2025), jointly organized by Little Flower College, Guruvayur, Kerala and Global Conference Hub, Coimbatore, Tamil Nadu on 27–28 September 2025.",
    techStack: ["Deep Learning", "CNN", "Python", "TensorFlow"],
    downloadUrl: "/assets/certificate.pdf",
    image: "/assets/certificate.jpg",
  },
];
