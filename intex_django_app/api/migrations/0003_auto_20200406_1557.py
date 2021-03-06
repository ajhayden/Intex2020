# Generated by Django 3.0.5 on 2020-04-06 21:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200406_1547'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='campaign',
            name='auto_fb_post_mode',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='campaign_hearts',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='campaign_image_url',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='category',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='category_id',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='charity_name',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='charity_npo_id',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='charity_valid',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='collected_date',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='currencycode',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='current_amount',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='days_active',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='days_created',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='deactivated',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='default_url',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='description',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='donators',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='goal',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='has_beneficiary',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='is_charity',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='is_launched',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='launch_date',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='location_city',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='location_country',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='location_zip',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='media_type',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='project_type',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='social_share_last_update',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='social_share_total',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='state',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='status',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='title',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='turn_off_donations',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='url',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='user_facebook_id',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='user_first_name',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='user_id',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='user_last_name',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='user_profile_url',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='velocity',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='visible_in_search',
        ),
    ]
