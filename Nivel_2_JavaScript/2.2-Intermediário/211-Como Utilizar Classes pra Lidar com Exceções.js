let objeto = [];

try {

    if (typeof objeto.execute !== "function") {
        throw new RangeError("Método execute não existe no objeto");
    }

    objeto.execute();

} catch (error) {
    console.log(error.message);
}