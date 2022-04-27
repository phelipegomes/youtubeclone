import axios from "axios";

export default function Api() {

    const Api = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyCHFVBlhOdyhuN-gioJh8oMOJcHnmhGGTo&part=snippet,contentDetails,statistics,status',
        }
    );
}
