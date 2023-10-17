import { PengajarItem } from "./pengajar";
import { ProgramsItem } from "./programs";

interface titleDesc {
  title: string;
  description: string;
}

export interface ProgramDetail {
  detail: {
    durasi: string;
    jadwal: string;
    ditutup: string;
    hargaAsli: number;
    hargaDiskon: number;
    hargaCicilan: number;
  };
  untukKamu: titleDesc[];
  pengajar: PengajarItem[];
  semesta: {
    image: string;
    title: string;
  }[];
  kuriKulum: {
    timeline: string;
    title: string;
    description: string;
  }[];
  testimony: {
    testimony: string;
    name: string;
    role: string;
    image: string;
  }[];
  programLain: ProgramsItem[];
}
