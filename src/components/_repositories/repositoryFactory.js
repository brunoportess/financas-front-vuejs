import periodRepository from "./periodRepository";
import categoryRepository from "./categoryRepository";

const repositories = {
    periods: periodRepository,
    categories: categoryRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
}