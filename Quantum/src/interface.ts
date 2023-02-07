interface Desc {
    title: string;
    subject: string;
    grade: number[];
    syllabus: { units: number; lessons: number; topics: number };
    options: string[];
    students: number;
    dates: { start: string; end: string };
}

export interface Card {
    favourite: boolean;
    image: string;
    desc: Desc;
    expired: boolean;
    footer: {
        preview: true;
        calendar: true;
        submission: true;
        reports: true;
    };
}
