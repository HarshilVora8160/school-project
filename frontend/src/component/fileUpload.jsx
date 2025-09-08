const FileUpload = () => {
    return (
        <form action="/upload" method="POST" encType="multipart/form-data" >
            <input type="file" name="profileImage" />
            <button type="submit" >Upload</button>
        </form>
    )
}

export default FileUpload