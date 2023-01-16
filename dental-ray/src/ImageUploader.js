import ImageUploading from "react-images-uploading";
import React from "react";
import {Button, Container, Image} from "react-bootstrap";
import "./styles.css"
import {useNavigate} from "react-router-dom";
import {getResult} from "./ApiService";


function ImageUploader() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 100;
    const navigate = useNavigate();

    async function processImage(image, results) {
        console.log(image);
        let result = await getResult(image);
        results.push(result);
    }

    const apiCall = async () => {
        let results = [];
        // images.forEach(image => processImage(image, results));
        navigate('/results',
            {
                replace: true,
                // state: {
                //     images: [1, 2, 3, 4, 5],
                // }
            }
        );
    }

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
        >
            {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
              }) => (
                // write your building UI
                <Container id="main-container">
                    <Container
                        id="buttons-container"
                    >
                        <Button
                            variant="dark"
                            size="lg"
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click here to upload pictures
                        </Button>

                        <Button
                            variant="dark"
                            size="lg"
                            onClick={onImageRemoveAll}
                        >
                            Remove all images
                        </Button>

                        <Button
                            variant="dark"
                            onClick={() => apiCall()}
                        >
                            GO!
                        </Button>
                    </Container>

                    <Container
                        id="images-container"
                    >
                        {imageList.map((image, index) => {
                            console.log(image);
                            return (
                                <Container
                                    id="image-container"
                                    key={index}>
                                    <Image
                                        width="100%"
                                        src={image['data_url']}
                                        alt=""
                                    />
                                    <div>
                                        <Button
                                            variant="dark"
                                            onClick={() => onImageUpdate(index)}
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            variant="dark"
                                            onClick={() => onImageRemove(index)}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </Container>
                            )
                        })}
                    </Container>
                </Container>
            )}
        </ImageUploading>
    );
}

export default ImageUploader;