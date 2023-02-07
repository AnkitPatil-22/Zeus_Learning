interface CourseDetails {
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
    course_details: CourseDetails;
    expired: boolean;
    footer: {
        preview: true;
        calendar: true;
        submission: true;
        reports: true;
    };
}
