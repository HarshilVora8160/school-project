const FileUpload = () => {
    return (
        <>
            <form action="/upload" method="POST" encType="multipart/form-data" >
                <input type="file" name="profileImage" className="text-white" />
                <button type="submit" className="text-white" >Upload</button>
            </form>
        </>
    )
}

export default FileUpload