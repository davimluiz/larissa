
import { Photo } from './types';

// IMPORTANTE: As imagens devem estar dentro da pasta /public no seu GitHub.
// O navegador irá buscá-las em "seusite.vercel.app/input_file_x.png"
export const PHOTOS: Photo[] = [
  { 
    id: 1, 
    url: "/input_file_0.png", 
    caption: "Luz própria", 
    rotation: -5, 
    offsetX: -70, 
    offsetY: -30 
  },
  { 
    id: 2, 
    url: "/input_file_1.png", 
    caption: "Momentos de paz", 
    rotation: 6, 
    offsetX: 70, 
    offsetY: -45 
  },
  { 
    id: 3, 
    url: "/input_file_2.png", 
    caption: "Felicidade solta", 
    rotation: -10, 
    offsetX: -25, 
    offsetY: 30 
  },
  { 
    id: 4, 
    url: "/input_file_3.png", 
    caption: "Amor puro", 
    rotation: 8, 
    offsetX: 95, 
    offsetY: 50 
  },
  { 
    id: 5, 
    url: "/input_file_4.png", 
    caption: "Sorriso doce", 
    rotation: -4, 
    offsetX: -85, 
    offsetY: 125 
  },
  { 
    id: 6, 
    url: "/input_file_5.png", 
    caption: "Energia vibrante", 
    rotation: 5, 
    offsetX: 45, 
    offsetY: 145 
  },
];

export const COLORS = {
  sunflower: "#FDB813",
  offWhite: "#FAF9F6",
  deepBlack: "#050505",
  olive: "#556B2F"
};
