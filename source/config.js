const DATA_FOLDER = process.env.DATA_FOLDER || '../data'

export default require(`${DATA_FOLDER}/config.json`)
