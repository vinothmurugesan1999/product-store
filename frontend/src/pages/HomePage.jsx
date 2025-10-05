import {
  Container,
  VStack,
  Heading,
  Text,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const {fetchProduct, products} = useProductStore()
  useEffect(() => {
    fetchProduct()
  },[fetchProduct])

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8} mt={5}>
          Current products
        </Heading>

        <SimpleGrid 
        columns={{
          base: 2,
          md: 3,
          lg: 4

        }}
        spacing={10}
        w={'full'}
        >
      {products.map(product => (
  <ProductCard key={product._id} product={product} />
))}

        </SimpleGrid>

       {products.length === 0 && (
         <Text
          textAlign={"center"}
          color={"grey"}
          fontSize={"xl"}
          fontWeight={"bold"}
        >
          No products found🙅,
          <Link
            as={RouterLink}
            to={"/create"}
            color={"blue.500"}
            _hover={{ textDecoration: "underline" }}
          >
            Create a product ➕
          </Link>
        </Text>
       )}
      </VStack>
    </Container>
  );
};

export default HomePage;
