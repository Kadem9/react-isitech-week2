type VideoProps = {
    id: string
}

export const Youtube : React.FC<VideoProps> = ({ id }) => {
    return (
        <div className="mt-4">
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + id} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}