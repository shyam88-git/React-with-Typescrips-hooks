import { ITour } from "../components/tour/models/ITour";

export class TourServices{

    static tours:ITour[]=[
        {
            sno: "AA001",
            name: "Paris",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Albu_Parish.svg/2560px-Flag_of_Albu_Parish.svg.png"
        },
        {
            sno: "AA002",
            name: "India",
            imgUrl: "https://media.istockphoto.com/id/1409466493/vector/india-flag-design-waving-indian-flag-made-of-satin-or-silk-fabric-vector-illustration.jpg?s=612x612&w=0&k=20&c=rTLIf6BF0WRnzCFHQYjJSjknue725U7gcBd_f94W3fM="
        },
        {
            sno: "AA003",
            name: "Nepal",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1200px-Flag_of_Nepal.svg.png"
        },
        {
            sno: "Australia",
            name: "London",
            imgUrl: "https://www.mrflag.com/wp-content/uploads/2018/10/I-Love-London-Flag.png"
        },
        {
            sno: "AA005",
            name: "America",
            imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
        }
    ];

    public static getAllTours():ITour[]{

        return this.tours;
    }
}

