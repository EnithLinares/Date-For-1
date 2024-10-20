import { useParams } from "react-router-dom";

export default function ActivityDetails() {
    let { id } = useParams();
    return (
        <div>
            <h1>Activity Details</h1>
            <p>Activity ID: {id}</p>
        </div>
    );
}
