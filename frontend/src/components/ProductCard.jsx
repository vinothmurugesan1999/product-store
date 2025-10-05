import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  useColorModeValue,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  Input,
  useDisclosure,
  ModalFooter,
  Button
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdEditDocument, MdDeleteForever } from "react-icons/md";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();

  const handleOpen = () => {
    setUpdatedProduct(product);
    onOpen();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDelete = async () => {
    try {
      await deleteProduct(product._id);
      toast({
        title: "Success",
        description: "Product deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    
    
   try {
    await updateProduct(id, updatedProduct);
    onClose();
    toast({
        title: "Success",
        description: "Product Updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
    })
   } catch (error) {
     toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
   }
  };

  const textColor = useColorModeValue("gray.800", "white");
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box
      w={"full"}
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{
        transform: "translateY(-5px)",
        shadow: "xl",
      }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={"full"}
        objectFit={"cover"}
      />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2} fontWeight={"bold"}>
          {product.name}
        </Heading>
        <Text fontWeight={"light"} color={textColor}>
          ₹{product.price}
        </Text>
        <HStack>
          <MdEditDocument
            color={"blue"}
            size={25}
            style={{ cursor: "pointer", marginLeft: "10px" }}
            onClick={handleOpen}
            title="Update Product"
          />
          <MdDeleteForever
            color="red"
            size={25}
            style={{ cursor: "pointer", marginLeft: "10px" }}
            onClick={handleDelete}
            title="Delete Product"
          />
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                value={updatedProduct.name}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Price"
                name="price"
                value={updatedProduct.price}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Image URL"
                name="image"
                value={updatedProduct.image}
                onChange={handleInputChange}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >
              Update
            </Button>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
