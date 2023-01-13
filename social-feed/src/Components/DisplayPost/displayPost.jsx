import LikeDislikeButton from "../Buttons/Buttons";



const DisplayPost = (props) => {
    return (  
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Post</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry,index) => {
            return (
              <tr key={index}>
                <td>{entry.name}</td>
                <li>
                <td>{entry.post}</td>
                </li>
                <td>{entry.date}</td>
                <LikeDislikeButton />
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}
 
export default DisplayPost;