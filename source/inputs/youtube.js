import RSSParser from 'rss-parser'
import config from '../config'

const rss = new RSSParser()

export default {
	fetch: async () => {
		for (const channel of config.youtube.channels) {
			const feed = await rss.parseURL(
				`https://www.youtube.com/feeds/videos.xml?channel_id=${channel.id}`
			)
			console.log(channel, feed)
		}
	},
}
