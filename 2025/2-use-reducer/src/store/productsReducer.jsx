export function productsReducer(state, action) {
    switch (action.type) {
        case 'CHANGE_FIELD':
            {
                const { fieldName, value } = action.values

                let formStatus = 'typing';
                if (value.length == 0) {
                    formStatus = 'empty';
                }

                return {
                    ...state,
                    formStatus: formStatus,
                    newProduct: {
                        ...state.newProduct,
                        [fieldName]: value
                    }
                }

            }
        case 'ADD_ITEM': {
            const existingProduct = state.products.find((product) => product.title === state.newProduct.title);

            if (existingProduct) {
                return {
                    ...state,
                    formStatus: "error"
                }
            }

            return {
                ...state,
                formStatus: 'success',
                products: [
                    ...state.products,
                    {
                        title: state.newProduct.title,
                        price: parseFloat(state.newProduct.price) || 0,
                    }
                ]
            }
        }
        case 'DELETE_ITEM': {
            const { title } = action.values
            return {
                ...state,
                products: state.products.filter((product) => product.title !== title)
            }
        }
        default:
            break;
    }
}