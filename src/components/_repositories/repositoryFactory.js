import periodRepository from "./periodRepository";
import categoryRepository from "./categoryRepository";
import financeRepository from "./financeRepository";

const repositories = {
    periods: periodRepository,
    categories: categoryRepository,
    finances: financeRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
}