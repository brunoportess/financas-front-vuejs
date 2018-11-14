import Repository from './repository';

const resource = '/periods';

export default {
    get() {
        return Repository.get(`${resource}`);
    },
    getPeriod(id) {
        return Repository.get(`${resource}/${id}`);
    },
    save(period) {
        return Repository.post(`${resource}`, period)
    },
    delete(id) {
        return Repository.delete(`${resource}/${id}`);
    }
}