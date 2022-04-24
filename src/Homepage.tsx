
type HomepageProps = {
    message: string;
}


export const Homepage = ({message}:HomepageProps) => {
    return (
        <div>
        <img src="./images/dex.jpg" alt="Dexter!"></img>
        <div className="homepage">{message}</div>
        </div>
    )
}