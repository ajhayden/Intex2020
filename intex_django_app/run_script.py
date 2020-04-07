#!/usr/bin/env python3

# initialize django
import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'intex_django_app.settings'
import django
django.setup()

# regular imports
from api.models import Campaign
from api.models import Donation
from api.models import Update
import csv


# main script
def main():
    with open("campaigns.csv", mode="r", encoding="utf-8-sig") as read_file:
        campaignData = csv.DictReader(read_file)
        print('CAMPAIGNS')
        for camp in campaignData:
            dbcamp = Campaign()
            dbcamp.url = str(camp['url'])
            dbcamp.campaign_id = str(camp['campaign_id'])
            dbcamp.auto_fb_post_mode = str(camp['auto_fb_post_mode'])
            dbcamp.collected_date = str(camp['collected_date'])
            dbcamp.category_id = str(camp['category_id'])
            dbcamp.category = str(camp['category'])
            dbcamp.currencycode = str(camp['currencycode'])
            dbcamp.current_amount = str(camp['current_amount'])
            dbcamp.goal = str(camp['goal'])
            dbcamp.donators = str(camp['donators'])
            dbcamp.days_active = str(camp['days_active'])
            dbcamp.days_created  = str(camp['days_created'])
            dbcamp.title  = str(camp['title'])
            dbcamp.description = str(camp['description'])
            dbcamp.default_url = str(camp['default_url'])
            dbcamp.has_beneficiary = str(camp['has_beneficiary'])
            dbcamp.media_type = str(camp['media_type'])
            dbcamp.project_type = str(camp['project_type'])
            dbcamp.turn_off_donations = str(camp['turn_off_donations'])
            dbcamp.user_id = str(camp['user_id'])
            dbcamp.user_first_name = str(camp['user_first_name'])
            dbcamp.user_last_name = str(camp['user_last_name'])
            dbcamp.user_facebook_id = str(camp['user_facebook_id'])
            dbcamp.user_profile_url = str(camp['user_profile_url'])
            dbcamp.visible_in_search = str(camp['visible_in_search'])
            dbcamp.status = str(camp['status'])
            dbcamp.deactivated = str(camp['deactivated'])
            dbcamp.state = str(camp['state'])
            dbcamp.is_launched = str(camp['is_launched'])
            dbcamp.campaign_image_url = str(camp['campaign_image_url'])
            dbcamp.created_at = str(camp['created_at'])
            dbcamp.launch_date = str(camp['launch_date'])
            dbcamp.campaign_hearts = str(camp['campaign_hearts'])
            dbcamp.social_share_total = str(camp['social_share_total'])
            dbcamp.social_share_last_update = str(camp['social_share_last_update'])
            dbcamp.location_city = str(camp['location_city'])
            dbcamp.location_country = str(camp['location_country'])
            dbcamp.location_zip = str(camp['location_zip'])
            dbcamp.is_charity = str(camp['is_charity'])
            dbcamp.charity_valid = str(camp['charity_valid'])
            dbcamp.charity_npo_id = str(camp['charity_npo_id'])
            dbcamp.charity_name = str(camp['charity_name'])
            dbcamp.velocity = str(camp['velocity'])
            dbcamp.save()
            print(str(dbcamp.url))

    # with open("donations.csv", mode="r", encoding="utf-8-sig") as read_file:
    #    donationData = csv.DictReader(read_file)
    #   print('DONATIONS')
    #    for don in campaignData:
    #        dbdon = Donation()
    #        dbdon.donation_id = str(don['donation_id'])
    #        dbdon.campaign_id = str(don['campaign_id'])
    #        dbcamp.collected_date = str(don['collected_date'])
    #        dbdon.amount = str(don['amount'])
    #        dbdon.is_offline = str(don['is_offline'])
    #        dbdon.is_anonymous = str(don['is_anonymous'])
    #        dbdon.name = str(don['name'])
    #        dbdon.verified = str(don['verified'])
    #        dbdon.save()
    #        print(str(dbdon.campaign_id))

    # with open("updates.csv", mode="r", encoding="utf-8-sig") as read_file:
    #    updateData = csv.DictReader(read_file)
    #    print('UPDATES')
    #    for up in updateData:
    #        dbup = Update()
    #        dbup.donation_id = str(up['update_id'])
    #        dbup.campaign_id = str(up['campaign_id'])
    #        dbup.collected_date = str(up['collected_date'])
    #        dbup.photo_url = str(up['photo_url'])
    #        dbup.created_at = str(up['created_at'])
    #        dbup.updates_author = str(up['updates_author'])
    #        dbup.updates_author_type = str(up['updates_author_type'])
    #        dbup.updates_text = str(up['updates_text'])
    #        dbup.comments = str(up['comments'])
    #        dbup.save()
    #        print(str(dbup.name))

    # print('################ ALL FINISHED ################')

# bootstrap
if __name__ == '__main__':
    main()